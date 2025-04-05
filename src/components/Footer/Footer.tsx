const Footer = () => {
    return (
        <footer className="w-full mt-36 pb-16 rounded-t-2xl">
            <ul className="inline-flex gap-6 mt-5">
                <li>
                    <a href="https://github.com/Gabrielmanuel11">
                    <img src="src/assets/icons/Github.svg" alt="GitHub Icon" className="w-6 h-6 dark:hidden" />
                    <img src="src/assets/icons/Github-w.svg" alt="GitHub Icon" className="w-6 h-6 hidden dark:block" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/_gabrielmanuel/">
                    <img src="src/assets/icons/Instagram.svg" alt="Instagram Icon" className="w-6 h-6 dark:hidden" />
                    <img src="src/assets/icons/Instagram-w.svg" alt="Instagram Icon" className="w-6 h-6 hidden dark:block" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/gabriel-manuel/">
                    <img src="src/assets/icons/Linkedin.svg" alt="Linkedin Icon" className="w-6 h-6 dark:hidden" />
                    <img src="src/assets/icons/Linkedin-w.svg" alt="Linkedin Icon" className="w-6 h-6 hidden dark:block" />
                    </a>
                </li>
            </ul>
            <div className="mt-8">
                <p className="text-[#2F0A42] font-normal dark:text-[#EBD3F8]">
                    Truly designed and coded by Gabriel Manuel.
                </p>
            </div>
        </footer>
    );
}

export default Footer;