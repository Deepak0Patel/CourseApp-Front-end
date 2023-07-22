import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack spacing={'8'} p="16" boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
      <LinkButton
        Icons={RiDashboardFill}
        text="Dashboard"
        url={'dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        Icons={RiAddCircleFill}
        text="Create Courses"
        url={'createcourses'}
        active={location.pathname === '/admin/createcourses'}
      />
      <LinkButton
        Icons={RiEyeFill}
        text="Courses"
        url={'courses'}
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        Icons={RiUser3Fill}
        text="Users"
        url={'users'}
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;
function LinkButton({ url, Icons, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'larger'}
        variant={'ghost'}
        colorScheme={active ? 'purple' : ''}
      >
        <Icons style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}
