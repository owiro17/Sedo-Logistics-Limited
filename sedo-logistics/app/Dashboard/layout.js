'user client'
import React from 'react';
import PropTypes from 'prop-types';
import SideNavbar from '../components/SideNavbar';
import { Protect, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';
// import { useUser } from './context/UserContext';

export default async function Layout({ children }) {

    const user = await currentUser();
    console.log(user);

    const { firstName, lastName, emailAddresses} = user;

    const params = new URLSearchParams();
    params.set('height', '200');
    params.set('width', '200');
    params.set('quality', '100');
    params.set('fit', 'crop');

    const imageSrc = `${user.imageUrl}?${params.toString()}`;

    return (
        <>
            <Protect>
                <main className="p-8 flex-col align-top lg:w-[89dvw] flex lg:flex-row">
                    {/* right navbar section */}
                    <SideNavbar
                        firstName={firstName}
                        profileImg={imageSrc}
                        lastName={lastName}
                        email={emailAddresses[0].emailAddress}
                    />
                    {/* Main section */}
                    <main className="lg:ml-5">{children}</main>
                </main>
            </Protect>
            <SignedOut>
                <RedirectToSignIn signInFallbackRedirectUrl="/sign-in" />
            </SignedOut>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};