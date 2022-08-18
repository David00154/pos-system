import React, { FC, ReactElement, ReactNode } from 'react'

export const TestModal: FC<{children:ReactNode|ReactElement, background?:string, opened?:boolean}> = ({children, background, opened = false}) => {
    return (
        <>
            <div aria-labelledby='wallet-adapter-mobdal-title' className="dialog-modal dialog-modal-fade-in ">
                <div className="dialog-modal-container">
                    <div className="dialog-modal-wrapper rounded">
                        {children}
                    </div>
                </div>
            </div>
            <style jsx>{`
            .dialog-modal {
                position: fixed;
                display: ${opened ? 'block' : 'none'};
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                transition: opacity linear 150ms;
                background: rgba(0, 0, 0, 0.5);
                
                z-index: 1040;
                overflow-y: auto;
            }

            .dialog-modal.dialog-modal-fade-in {
                opacity: 1;
            }

            .dialog-modal-container {
                display: flex;
                margin: 3rem;
                min-height: calc(100vh - 6rem); /* 100vh - 2 * margin */
                align-items: center;
                justify-content: center;
            }

            @media (max-width: 480px) {
                .dialog-modal-container {
                    margin: 1rem;
                    min-height: calc(100vh - 2rem); /* 100vh - 2 * margin */
                }
            }

            .dialog-modal-wrapper {
                color: #fff;
                box-sizing: border-box;
                position: relative;
                display: flex;
                align-items: center;
                flex-direction: column;
                z-index: 1050;
                max-width: 400px;
                /* border-radius: 10px; */
                background: ${background ? background : 'rgb(24 24 24 / var(--tw-bg-opacity))'};
                /* background: #10141f; */
                /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6); */
                flex: 1;
            }

            .dialog-modal-wrapper .dialog-button {
                width: 100%;
            }    
        `}</style>
        </>
    )
}
