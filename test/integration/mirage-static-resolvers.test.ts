import { expect } from 'chai';
import { graphqlSchema } from './test-helpers/test-schema';
import defaultResolvers from './test-helpers/mirage-static-resolvers';
import { server as mirageServer } from './test-helpers/mirage-sample';
import defaultScenario from './test-helpers/mirage-sample/fixtures';
import { createQueryHandler } from '../../src/graphql';

const { query: graphQLHandler } = createQueryHandler(defaultResolvers, {
  state: {},
  dependencies: {
    mirageServer,
    graphqlSchema,
  },
});

describe('integration/mirage-static-resolvers', function () {
  beforeEach(() => {
    mirageServer.db.loadData(defaultScenario);
  });

  afterEach(() => {
    mirageServer.db.emptyData();
  });

  it('handles a root query (scalar)', async function () {
    const query = `query {
      hello
    }`;

    const result = await graphQLHandler(query);
    expect(result).to.deep.equal({
      data: {
        hello: 'hi',
      },
    });
  });

  it('handles a root query (custom type)', async function () {
    const query = `query {
      person(id: 1) {
        name
        age
      }
    }`;

    const result = await graphQLHandler(query);
    expect(result).to.deep.equal({
      data: {
        person: {
          name: 'Fred Flinstone',
          age: 43,
        },
      },
    });
  });

  it('handles nested objects', async function () {
    const query = `query {
      person(id: 1) {
        name
        age
        friends {
          name
          age
        }
      }
    }`;

    const result = await graphQLHandler(query);
    expect(result).to.deep.equal({
      data: {
        person: {
          name: 'Fred Flinstone',
          age: 43,
          friends: [
            {
              name: 'Barney Rubble',
              age: 42,
            },
            {
              name: 'Wilma Flinstone',
              age: 40,
            },
            {
              name: 'Betty Rubble',
              age: 39,
            },
          ],
        },
      },
    });
  });
});