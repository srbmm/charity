import React from 'react';
import {Card} from '@mui/material'
import './ProfileCard.css'
const ProfileCard: React.FC = (props) => {
    return (
        <Card className="grid-container">
                <div className="profile"></div>
                <p className="text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    کاربردهای متنوع با هدف بهبود ابزارها.
                </p>
        </Card>
    );
};

export default ProfileCard;
