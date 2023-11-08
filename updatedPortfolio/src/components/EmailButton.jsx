import Button from 'react-bootstrap/Button';

function EmailButton() {
  const handleEmailClick = () => {
    const email = 'coltonmakesstuff@gmail.com';
    const subject = encodeURIComponent('Your subject');
    const body = encodeURIComponent('Your message here');
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <Button onClick={handleEmailClick}>
      Send Email
    </Button>
  );
}

export default EmailButton;
