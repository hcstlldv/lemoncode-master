import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationContext } from './organization';

interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListPage: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [searchText, setSearchText] = React.useState('');
    const { organization, setOrganization } =
        React.useContext(OrganizationContext);

    const [searchOrganization, setSearchedOrganization] =
        React.useState(organization);

    React.useEffect(() => {
        fetch(
            `https://api.github.com/orgs/${
                searchOrganization ? searchOrganization : 'lemoncode'
            }/members`
        )
            .then((response) => {
                if (!response.ok) return [];
                return response.json();
            })
            .then((json) => {
                return setMembers(json ?? []);
            });
    }, [searchOrganization]);

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            if (searchText) {
                setSearchedOrganization(searchText);
            }
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchText]);

    return (
        <>
            <h2>Hello from List page</h2>
            <input
                type="text"
                className="search-bar"
                placeholder="Lemoncode, Microsoft..."
                defaultValue={organization}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <div className="list-user-list-container">
                <div className="list-header">
                    <span className="avatar-header">Avatar</span>
                    <span>Id</span>
                    <span className="name-header">Name</span>
                </div>
                {members.map((member) => (
                    <div className="list-item" key={member.id}>
                        <img className="avatar-item" src={member.avatar_url} />
                        <span>{member.id}</span>
                        <Link
                            className="name-item"
                            to={`/detail/${member.login}`}
                            onClick={() => {
                                setOrganization(searchOrganization);
                            }}
                        >
                            {member.login}
                        </Link>
                    </div>
                ))}
            </div>
            <Link to="/detail">Navigate to detail page</Link>
        </>
    );
};
