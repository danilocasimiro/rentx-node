import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpeciticationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}
export { ISpeciticationsRepository, ICreateSpecificationDTO };
