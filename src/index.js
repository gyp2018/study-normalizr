import { normalize, schema } from 'normalizr';
import { v4 } from 'uuid';

const originalData = {
  id: v4(),
  groupName: 'blackpink',
  members: [
    {
      id: v4(),
      name: '제니'
    },
    {
      id: v4(),
      name: '지수'
    },
    {
      id: v4(),
      name: '로제'
    },
    {
      id: v4(),
      name: '리사'
    }
  ],
  company: {
    id: v4(),
    name: 'YG엔터테인먼트',
    employees: [
      {
        id: v4(),
        name: "GD"
      }
    ]
  }
};

const idol = new schema.Entity('idols');
const employee = new schema.Entity('employees');
const company = new schema.Entity('company', {
  employees: [ employee ]
});
const girlGroup = new schema.Entity('girlGroups', {
  company: company,
  members: [ idol ]
});

const normalizedData = normalize(originalData, girlGroup);

console.dir(normalizedData)
