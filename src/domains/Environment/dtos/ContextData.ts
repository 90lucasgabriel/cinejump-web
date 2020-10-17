import Environment from 'domains/Environment/dtos/Environment';

export default interface ContextData {
  isProduction: boolean;
  environmentList: Environment[];
}
