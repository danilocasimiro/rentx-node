import { User } from "../../entities/User";
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {

  private repository: Repository<User>
  
  constructor(){
    this.repository = getRepository(User);
  }

  async create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
   
    const user = this.repository.create({
      name, email, driver_license, password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository}