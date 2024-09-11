import TitleLogotype from "@/Components/Header/Navbar/Title_logotype/Title_Logotype"
import ContentMain from "@/Components/ContentMain/ContentMain"

export default function LayoutHome() {
    return (
        <div>
            <div className="m-0 p-0">
                <TitleLogotype />
                <ContentMain />
            </div>
        </div>
    )
}