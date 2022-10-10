import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { useRouteMatch } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import './breadcrumb.css';

const PureBreadcrumbs = ({ breadcrumbs }) => {
  console.log('------------------------dkdj-------------', breadcrumbs)
  const pathName = useLocation().pathname.split('/').pop();
  console.log('----------ha ha -------------', pathName)
  // const { id } = useRouteMatch().params;
  const { id } = useParams();

  console.log(id)

  return (
    <nav className="mx-3 my-2">
      <ol className="breadcrumbs m-0 p-0">
        {breadcrumbs.map(({ breadcrumb, match }, index) => {
          if (id) return null;
          if (breadcrumb.props.children.toLowerCase() === pathName) {
            return (
              <span className="breadcrumbs__item is-active" key={match.url}>
                {breadcrumb}
              </span>
            );
          } else {
            return (
              <span className="breadcrumbs__item" key={match.url}>
                <Link to={match.url || ''}>{breadcrumb}</Link>
                {index < breadcrumbs.length - 1}
              </span>
            );
          }
        })}
      </ol>
    </nav>
  );
};

export default withBreadcrumbs()(PureBreadcrumbs);
