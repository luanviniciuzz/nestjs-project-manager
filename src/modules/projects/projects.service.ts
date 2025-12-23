import { Injectable } from '@nestjs/common'
import { ProjectRequestDTO } from './projects.dto'

@Injectable()
export class ProjectsService {
  findAll() {
    return 'aa'
  }
  findById(id: string) {
    return 'aa'
  }
  create(data: ProjectRequestDTO) {
    return 'aa'
  }
  update(id: string, data: ProjectRequestDTO) {
    return 'aa'
  }
  remove(id: string) {
    return 'aa'
  }
}
