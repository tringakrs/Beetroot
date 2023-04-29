  CRUD FUNCTIONS IN TASK_PROJECT FOR PROJECT
  async updateProject(
    projectId: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    const project = await this.getProjectById(projectId);
    if (!project) {
      throw new UnprocessableEntityException(
        `Project with ID ${projectId} not found`,
      );
    }
    Object.assign(project, updateProjectDto);
    await this.save(project);
    return project;
  }
  //the Object.assign() method to copy the properties from the updateProjectDto object to the project object, and then saves the updated project to the database using the save() method.
  //This approach is more verbose, but it provides more control over the update process, as you can choose which properties to update and how to merge them with the existing values.

  /*
  async updateProject(id:string, data: UpdateProjectDto) :Promise<Project>{
    const project = this.getProjectById(id);
    if(!project){
        throw new HttpException('Project does not exist',404);
    }
    await this.update({uuid:id},data)
    const updated = this.getProjectById(id);
    return updated;
  }
  */

Both functions perform the same task, which is to update a project with the specified id using the data provided in the UpdateProjectDto. However, the implementation details are slightly different.
The first function uses the Object.assign() method to copy the properties from the updateProjectDto object to the project object, and then saves the updated project to the database using the save() method. 
This approach is more verbose, but it provides more control over the update process, as you can choose which properties to update and how to merge them with the existing values.
The second function uses the update() method of the repository to update the project with the specified id. This approach is more concise, but it updates all the properties in the data object, 
regardless of whether they have changed or not. Also, it doesn't return the updated project object directly, so you need to retrieve it again using the getProjectById() method.
In terms of which one is better, it depends on your use case and personal preferences. If you need more control over the update process, the first approach might be more suitable. If you prefer 
a more concise and straightforward implementation, the second approach might be better.

KENA KRIJU LIDHJEN MES PROJECT_USERS

.save i ka 2 role: nese ekziston e boj save nese jo e krijoj