import { CONFIG } from 'src/config-global';
import { _userList } from 'src/_mock/_user';

import { ProjectEditView } from 'src/sections/project/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Project edit | Dashboard - ${CONFIG.site.name}` };

export default function Page({ params }) {
  const { id } = params;

  // const currentUser = _userList.find((user) => user.id === id);

  // return <UserEditView user={currentUser} />;
  return <ProjectEditView id={id} />;
}

// ----------------------------------------------------------------------

/**
 * [1] Default
 * Remove [1] and [2] if not using [2]
 */
const dynamic = CONFIG.isStaticExport ? 'auto' : 'force-dynamic';

export { dynamic };

/**
 * [2] Static exports
 * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
export async function generateStaticParams() {
  if (CONFIG.isStaticExport) {
    return _userList.map((user) => ({ id: user.id }));
  }
  return [];
}
