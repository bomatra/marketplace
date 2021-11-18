import './footer.css';

function Footer(props) {
    return (
        <div class='row'>
            <button class="button" onClick={props.addMember}>Add new member</button>
        </div>
    )

}

export default Footer;