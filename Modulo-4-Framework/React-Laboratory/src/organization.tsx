import React from 'react';

export const OrganizationContext = React.createContext({
    organization: 'lemoncode',
    setOrganization: (value) => {},
});

export const OrganizationProvider = (props) => {
    const [organization, setOrganization] = React.useState('lemoncode');

    return (
        <OrganizationContext.Provider value={{ organization, setOrganization }}>
            {props.children}
        </OrganizationContext.Provider>
    );
};
