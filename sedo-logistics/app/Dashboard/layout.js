// 'use client'
import React from 'react';
import PropTypes from 'prop-types';
import SideNavbar from '../components/SideNavbar';
import { Protect, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';
// import axios from 'axios';

export default async function Layout({ children }) {
    const userData = await currentUser();
    if (!userData){
        return <RedirectToSignIn signInFallbackRedirectUrl="/sign-in" />;
    }

    const { firstName, lastName, emailAddresses, imageUrl } = userData;
    const params = new URLSearchParams({ height: '200', width: '200', quality: '100', fit: 'crop' });
    const imageSrc = `${imageUrl}?${params.toString()}`;

    return (
        <>
            <Protect>
                <main className="p-8 flex-col align-top lg:w-[89dvw] flex lg:flex-row">
                    {/* right navbar section */}
                    <SideNavbar
                        firstName={firstName}
                        profileImg={imageSrc}
                        lastName={lastName}
                        email={emailAddresses?.[0]?.emailAddress}
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
