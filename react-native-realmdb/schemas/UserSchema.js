export default class UserSchema {
  static schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      fullName: 'string',
      description: 'string',
      start: 'int',
      forks: 'int'
    }
  }
}
