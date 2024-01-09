import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div style={{
            display: "flex",
            marginRight: "auto",
            alignItems: "center",
            gap: "16px",

        }}>
            <Link to="/">
                <img
                    src="openai.png"
                    alt="Open AI image"
                    width={"30px"}
                    height={"30px"}
                    className="image-inverted"
                />
            </Link>
                <Typography
                style={{fontSize:'24px'}}
                    sx={{
                        display: { md: "block", sm: "none", xs: "none" }, mr: "auto", fontWeight: "800", textShadow: "2px 2px 20px #000",
                    }}
                >
                    MERN-GPT
                </Typography>
        </div>
    );
};

export default Logo;