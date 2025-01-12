import ClassroomForm from "@components/classrooms/ClassroomForm";
import Header from "@components/header";
import { User } from "@types";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useEffect, useState } from "react";

const Classroom: React.FC = () => {
    const [loggedInUser, setLoggedInUser] = useState<User>(null);
    const { t } = useTranslation();

    useEffect(() => {
        setLoggedInUser(JSON.parse(sessionStorage.getItem("loggedInUser")));
    }, []);

    return (
        <>
            <Head>
                <title>{t("header.nav.classrooms")}</title>
            </Head>
            <Header />
            <main className="p-6 min-h-screen flex flex-col items-center">
                {loggedInUser && loggedInUser.role === "admin" && (
                    <>
                        <h1>{t("header.nav.add.classroom")}</h1>
                        <section className="mt-5">
                            <ClassroomForm />
                        </section>
                    </>
                )}
                {(!loggedInUser || loggedInUser.role != "admin") && (
                    <h2 className="text-red-800">
                        You are not authorized to view this page.
                    </h2>
                )}
            </main>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
        },
    };
};

export default Classroom;
