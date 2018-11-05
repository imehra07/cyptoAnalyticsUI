import { environment } from '../../environments/environment';
const URL = environment.API_URL;

const URL_CONFIG = {
  FIND_ALL_CURRENCIES: URL+ "/currencies",
  SEARCH: URL+ "/currencies/search"
};

export default URL_CONFIG;
