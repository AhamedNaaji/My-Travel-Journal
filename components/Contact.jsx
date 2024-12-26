export default function Contact(props) {
    console.log(props)
  return (
    <div class="contact-card">
        <img
        class="card-image"
        src={props.imageSrc}
        alt="Contact Image"
        />
        <div class="contact-container">
            <div class="call">
                <img src={props.imageSrc} />
                <p>+123 456 7890</p>
            </div>
            <div class="mail">
                <img src="../Photos/Japan.jpg" alt="Email Icon" />
                <p>example@mail.com</p>
             </div>
        </div>
    </div>
    

    
    )
}