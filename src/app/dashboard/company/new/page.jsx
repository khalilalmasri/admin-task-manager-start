import { CONFIG } from 'src/config-global';

import { CompanyCreateView } from 'src/sections/company/view/company-create-view';

// import { UserCreateView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new company | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <CompanyCreateView />;
}
