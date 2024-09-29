'use client';

import { paths } from 'src/routes/paths';

// import { UserNewEditForm } from 'src/sections/user/user-new-edit-form';
import { useTranslate } from 'src/locales';
import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// import { CompanyNewEditForm } from '../company-new-edit-form';
import { UserNewEditForm } from '../user-new-edit-form';

// ----------------------------------------------------------------------

export function UserCreateView() {
  const {t} = useTranslate();
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading= {t('add_user')}
        links={[
          { name: t('dashboard'), href: paths.dashboard.root },
          { name: t('users'), href: paths.dashboard.user.list },
          { name: t('add_user') },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <UserNewEditForm />
    </DashboardContent>
  );
}
