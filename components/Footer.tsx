const Footer = () => {
    return (
        <footer style={{
            padding: '30px 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: '#888',
            fontSize: '0.9rem',
            marginTop: '50px'
        }}>
            <p>&copy; {new Date().getFullYear()} Harish M. All rights reserved.</p>
            <p style={{ marginTop: '5px' }}>Built with Next.js & Agentic AI</p>
        </footer>
    );
};

export default Footer;
