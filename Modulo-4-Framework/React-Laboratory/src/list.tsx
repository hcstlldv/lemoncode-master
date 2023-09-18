import React from 'react';
import { Link } from 'react-router-dom';

interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListPage: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [searchText, setSearchText] = React.useState('');
    const [searchOrganization, setSearchedOrganization] = React.useState('');

    React.useEffect(() => {
        fetch(`https://api.github.com/orgs/lemoncode/members`)
            .then((response) => response.json())
            .then((json) => setMembers(json));
    }, []);

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setSearchedOrganization(searchText);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchText]);

    React.useEffect(() => {
        if (!searchOrganization) return;
        console.log(
            '🚀 ~ file: list.tsx:33 ~ React.useEffect ~ searchOrganization:',
            searchOrganization
        );
    }, [searchOrganization]);

    return (
        <>
            <h2>Hello from List page</h2>
            <input
                type="text"
                className="search-bar"
                placeholder="Lemoncode, Microsoft..."
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
