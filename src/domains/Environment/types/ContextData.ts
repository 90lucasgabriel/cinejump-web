import Environment from 'domains/Environment/types/Environment';

export default interface ContextData {
  isProduction: boolean;
  environmentList: Environment[];
}
