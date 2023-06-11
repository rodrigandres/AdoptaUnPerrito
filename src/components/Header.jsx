import TextBlock from "./TextBlock";

const Header = ({title} ) => {

    return(
        <div className="header">
        <TextBlock {...{title}} />
        </div>
    )
}

export default Header;