type AppRouteProps = {
    layout: React.FC<LayOutPropTypes>
    exact?: boolean
    path?: string
    component: any
}

type Gateway = {
  gatewayid: string 
  userId: string[]
  name: string 
  type: string 
  apiKey: string 
  secondApiKey: string 
  description: string 
}

type Gateway_Response = {
  data: Gateway[]
}

type Project = {
  projectId: string 
  userIds: string[]
  rule: string 
  gatewayids: string[]
  structure: string 
  industry: string 
  website: string 
  description: string 
  image: string 
  name: string
}

type Project_Response = {
  data: Project[]
}

type User = {
  userId: string 
  firstName: string 
  lastName: string 
  email: string
}

type User_Response = {
  data: User[]
}