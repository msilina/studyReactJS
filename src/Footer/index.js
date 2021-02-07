import React from 'react';
import './Footer.css';
import footer from '../images/footer.png'; 

const Footer = (props) => {
    return (
        <div className="footer">
            <div ref={ props.footerRef }/>
            <table className="footer-table">
                <tbody>
                    <tr>
                        <td className="img-container">
                            <img className="img" src={ footer } alt="Footer" />
                        </td>
                        <td className="text-container td">
                            <p>&copy; Чтототам corporation</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Footer;
