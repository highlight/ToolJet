import React from 'react';
import { Link } from 'react-router-dom';
import useRouter from '@/_hooks/use-router';
import { ToolTip } from '@/_components/ToolTip';
import { Profile } from '@/_components/Profile';
import { NotificationCenter } from '@/_components/NotificationCenter';
import Logo from '@assets/images/rocket.svg';
import Header from '../Header';
import { authenticationService } from '@/_services';
import SolidIcon from '../Icon/SolidIcons';
import { getPrivateRoute } from '@/_helpers/routes';

function Layout({ children, switchDarkMode, darkMode }) {
  const router = useRouter();
  const currentUserValue = authenticationService.currentSessionValue;
  const admin = currentUserValue?.admin;
  const marketplaceEnabled = admin && window.public_config?.ENABLE_MARKETPLACE_FEATURE == 'true';

  return (
    <div className="row m-auto">
      <div className="col-auto p-0">
        <aside className="left-sidebar h-100 position-fixed">
          <div className="tj-leftsidebar-icon-wrap">
            <div className="application-brand" data-cy={`home-page-logo`}>
              <Link to={getPrivateRoute('dashboard')}>
                <Logo />
              </Link>
            </div>
            <div>
              <ul className="sidebar-inner nav nav-vertical">
                <li className="text-center cursor-pointer">
                  <ToolTip message="Dashboard" placement="right">
                    <Link
                      to="/"
                      className={`tj-leftsidebar-icon-items  ${
                        (router.pathname === '/:workspaceId' || router.pathname === getPrivateRoute('dashboard')) &&
                        `current-seleted-route`
                      }`}
                    >
                      <SolidIcon
                        name="apps"
                        fill={
                          router.pathname === '/:workspaceId' || router.pathname === getPrivateRoute('dashboard')
                            ? '#3E63DD'
                            : darkMode
                            ? '#4C5155'
                            : '#C1C8CD'
                        }
                      />
                    </Link>
                  </ToolTip>
                </li>
                <li className="text-center mt-2 cursor-pointer">
                  <Link to={getPrivateRoute('workflows')}>
                    <ToolTip message="Workflows" placement="right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-tidal layout-sidebar-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#C0C8CC"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5.333 6l3.334 3.25l3.333 -3.25l3.333 3.25l3.334 -3.25l3.333 3.25l-3.333 3.25l-3.334 -3.25l-3.333 3.25l3.333 3.25l-3.333 3.25l-3.333 -3.25l3.333 -3.25l-3.333 -3.25l-3.334 3.25l-3.333 -3.25z"></path>
                      </svg>
                    </ToolTip>
                  </Link>
                </li>
                {window.public_config?.ENABLE_TOOLJET_DB == 'true' && admin && (
                  <li className="text-center  cursor-pointer">
                    <ToolTip message="Tables" placement="right">
                      <Link
                        to={getPrivateRoute('database')}
                        className={`tj-leftsidebar-icon-items  ${
                          router.pathname === getPrivateRoute('database') && `current-seleted-route`
                        }`}
                      >
                        <SolidIcon
                          name="table"
                          fill={
                            router.pathname === getPrivateRoute('database') && `current-seleted-route`
                              ? '#3E63DD'
                              : darkMode
                              ? '#4C5155'
                              : '#C1C8CD'
                          }
                        />
                      </Link>
                    </ToolTip>
                  </li>
                )}

                {/* DATASOURCES */}
                {admin && (
                  <li className="text-center cursor-pointer">
                    <ToolTip message="Global Datasources" placement="right">
                      <Link
                        to={getPrivateRoute('global_datasources')}
                        className={`tj-leftsidebar-icon-items  ${
                          router.pathname === getPrivateRoute('global_datasources') && `current-seleted-route`
                        }`}
                      >
                        <SolidIcon
                          name="datasource"
                          fill={
                            router.pathname === getPrivateRoute('global_datasources')
                              ? '#3E63DD'
                              : darkMode
                              ? '#4C5155'
                              : '#C1C8CD'
                          }
                        />
                      </Link>
                    </ToolTip>
                  </li>
                )}
                {marketplaceEnabled && (
                  <li className="text-center d-flex flex-column">
                    <ToolTip message="Marketplace (Beta)" placement="right">
                      <Link
                        to="/integrations"
                        className={`tj-leftsidebar-icon-items  ${
                          router.pathname === '/integrations' && `current-seleted-route`
                        }`}
                      >
                        <SolidIcon
                          name="marketplace"
                          fill={router.pathname === '/integrations' ? '#3E63DD' : darkMode ? '#4C5155' : '#C1C8CD'}
                        />
                      </Link>
                    </ToolTip>
                  </li>
                )}
                <li className="text-center cursor-pointer">
                  <ToolTip message="Workspace settings" placement="right">
                    <Link
                      to={getPrivateRoute('workspace_settings')}
                      className={`tj-leftsidebar-icon-items  ${
                        router.pathname === getPrivateRoute('workspace_settings') && `current-seleted-route`
                      }`}
                    >
                      <SolidIcon
                        name="setting"
                        fill={
                          router.pathname === getPrivateRoute('workspace_settings')
                            ? '#3E63DD'
                            : darkMode
                            ? '#4C5155'
                            : '#C1C8CD'
                        }
                      />
                    </Link>
                  </ToolTip>
                </li>

                <li className="tj-leftsidebar-icon-items-bottom text-center">
                  <NotificationCenter darkMode={darkMode} />
                  <ToolTip message="Mode" placement="right">
                    <div
                      className="cursor-pointer  tj-leftsidebar-icon-items"
                      onClick={() => switchDarkMode(!darkMode)}
                    >
                      <SolidIcon name={darkMode ? 'lightmode' : 'darkmode'} fill={darkMode ? '#4C5155' : '#C1C8CD'} />
                    </div>
                  </ToolTip>

                  <ToolTip message="Profile" placement="right">
                    <Profile switchDarkMode={switchDarkMode} darkMode={darkMode} />
                  </ToolTip>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <div style={{ paddingLeft: 56, paddingRight: 0 }} className="col">
        <Header />
        <div style={{ paddingTop: 64 }}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
