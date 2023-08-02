enum UserPermissions {
  Admin = 'admin',
  User = 'user',
  Editor = 'editor',
}

interface User {
  email: string
  username: string
  name: string
  id: number
  age: number
  permission: UserPermissions
  createdAt: Date
  updatedAt: Date
  isOnline: Boolean
  hobbies: string[]
  password: string
}

interface UserDict {
  [index: number]: User
}

interface Message {
  text: string
  likes: number
  createdAt: Date
  updatedAt: Date
}

interface MessageDict {
  [index: number]: Message
}
type ComparePassword = string

type Hobby = []

type Register = Pick<User, 'name' & 'username' & 'password'>

type Login = Omit<
  User,
  'hobbies' & 'isOnline' & 'permission' & 'createdAt' & 'updatedAt'
> &
  ComparePassword
// Menu, Friend и Friends, Likes  - не понимаю какие поля должны в них быть
