import type { PermissionRulesProps } from 'src/services/base/types'

export interface BaseModelProps {
  id: string | number
  created_at: string
  updated_at: string
  permissionRules: PermissionRulesProps
  contentType: string | number
}
export class BaseModel {
  static modelName = 'base'

  static baseUrl = '/example'

  static url() {
    return `${this.baseUrl}/${this.modelName}`
  }
}
