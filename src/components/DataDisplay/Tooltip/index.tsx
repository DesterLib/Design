import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const TooltipWrapper = styled.div(({ theme: { palette } }) => ({
    color: palette.text.primary,
    display: 'inline-block',
    position: 'relative',
}));

const StyledTooltip = styled(motion.div)(({ theme: { palette } }) => ({
    position: 'absolute',
    borderRadius: '4px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '6px',
    color: palette.text.primary,
    background: palette.background.paper,
    fontSize: '14px',
    fontFamily: 'sans-serif',
    lineHeight: 1,
    zIndex: 100,
    whiteSpace: 'nowrap',
    '&::before': {
        content: '',
        left: '50%',
        border: 'solid transparent',
        height: 0,
        width: 0,
        position: 'absolute',
        pointerEvents: 'none',
        borderWidth: '',
        marginLeft: 'calc(30px * -1)',
    },
    '&.top': { top: 'calc(40px * -1)' },
    '&.right': {
        left: 'calc(100% + 10px)',
        top: '50%',
        transform: 'translateX(0) translateY(-50%)',
    },
    '&.bottom': { bottom: 'calc(40px * -1)' },
    '&.left': {
        left: 'auto',
        right: 'calc(100% + 10px)',
        top: '50%',
        transform: 'translateX(0) translateY(-50%)',
    },
}));

type DefaultProps = {
    /**
     * Tooltip direction
     */
    direction?: string;
    /**
     * Tooltip content
     */
    content?: React.ReactNode | string;
    /**
     * Tooltip children
     */
    children?: React.ReactNode | string;
};

type TooltipProps = DefaultProps & React.ComponentProps<typeof TooltipWrapper>;

const Tooltip: React.FC<TooltipProps> = ({ children, delay, direction, content }: any) => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 0);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            <AnimatePresence>
                {active && (
                    <StyledTooltip
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0 }}
                        exit={{ opacity: 0 }}
                        className={direction || 'top'}
                    >
                        {content}
                    </StyledTooltip>
                )}
            </AnimatePresence>
        </TooltipWrapper>
    );
};

export default Tooltip;
