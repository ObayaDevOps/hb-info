// Reusable Vertical Stepper Navigation Component (plain React + inline styles)
const VerticalStepperNav = ({ sections, activeSection, onLinkClick }) => {
    return (
        <nav style={{ position: 'relative' }}>
            {sections.map((section, index) => {
                const isActive = activeSection === section.id;
                const isLastItem = index === sections.length - 1;

                return (
                    <div key={section.id} style={{ display: 'flex', alignItems: 'flex-start', minHeight: '50px', position: 'relative' }}>
                        {/* Line Connector */}
                        {!isLastItem && (
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '11px',
                                    top: '20px',
                                    bottom: 0,
                                    width: '2px',
                                    backgroundColor: '#52525b',
                                    zIndex: 0,
                                }}
                            />
                        )}

                        {/* Dot Container */}
                        <span
                            style={{
                                minWidth: '24px',
                                height: '24px',
                                position: 'relative',
                                zIndex: 1,
                                marginRight: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: isActive ? '0px 0px 15px 4px rgba(45,255,196,0.9)' : 'none',
                                borderRadius: '9999px',
                                transition: 'box-shadow 0.2s ease-in-out',
                            }}
                        >
                            {/* Outer Ring (Conditional) */}
                            {isActive && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '2px',
                                        left: '2px',
                                        width: '20px',
                                        height: '20px',
                                        border: '2px solid #D2FAFB',
                                        borderRadius: '9999px',
                                        zIndex: 0,
                                        boxShadow: '0px 0px 183px 45px rgba(210, 250, 251, 0.9)',
                                    }}
                                />
                            )}
                            {/* Inner Dot */}
                            <span
                                style={{
                                    width: isActive ? '12px' : '10px',
                                    height: isActive ? '12px' : '10px',
                                    backgroundColor: isActive ? '#5eead4' : '#71717a',
                                    borderRadius: '9999px',
                                    position: 'relative',
                                    zIndex: 1,
                                    transition: 'all 0.2s ease-in-out',
                                }}
                            />
                        </span>

                        {/* Link */}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onLinkClick(section.id);
                            }}
                            className="stepper-link"
                            style={{
                                color: isActive ? '#D2FAFB' : '#a1a1aa',
                                fontWeight: isActive ? 600 : 500,
                                fontFamily: 'Poppins, var(--font-poppins), sans-serif',
                                fontSize: '1rem',
                                lineHeight: '1.875rem',
                                transition: 'color 0.2s ease-in-out',
                            }}
                        >
                            {section.title}
                        </a>
                    </div>
                );
            })}
        </nav>
    );
};

export default VerticalStepperNav;
