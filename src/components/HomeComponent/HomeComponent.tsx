import './HomeComponent.css';

export default function HomeComponent() {
    return (
        <div className="HomeGeneralComponent">
            <div className="HomeTitleComponent">
                <h1>
                    Découvrez vos langages de l'amour
                </h1>
            </div>
            <div className="HomeContentComponent">
                <div className='languageCardElement'>
                    <h2 className='languageCardTitleElement'>Les paroles valorisantes</h2>
                    <img src="/src/assets/coupleImg/coupleInLoveParoles.png" className="img-thumbnail languageCardImageElement" alt="" />
                    <button className="toAppearOnHover btn btn-danger">En Savoir Plus</button>
                </div>
                <div className='languageCardElement'>
                    <h2 className='languageCardTitleElement'>Les moments de qualité</h2>
                    <img src="/src/assets/coupleImg/coupleInLove.png" className="img-thumbnail languageCardImageElement" alt="" />
                    <button className="toAppearOnHover btn btn-danger">En Savoir Plus</button>
                </div>
                <div className='languageCardElement'>
                    <h2 className='languageCardTitleElement'>Les cadeaux</h2>
                    <img src="/src/assets/coupleImg/coupleInLoveCadeaux.png" className="img-thumbnail languageCardImageElement" alt="" />
                    <button className="toAppearOnHover btn btn-danger">En Savoir Plus</button>
                </div>
                <div className='languageCardElement'>
                    <h2 className='languageCardTitleElement'>Les services rendus</h2>
                    <img src="/src/assets/coupleImg/coupleInLoveService.png" className="img-thumbnail languageCardImageElement" alt="" />
                    <button className="toAppearOnHover btn btn-danger">En Savoir Plus</button>
                </div>
                <div className='languageCardElement'>
                    <h2 className='languageCardTitleElement'>Le contact physique</h2>
                    <img src="/src/assets/coupleImg/coupleInLoveToucher.png" className="img-thumbnail languageCardImageElement" alt="" />
                    <button className="toAppearOnHover btn btn-danger">En Savoir Plus</button>
                </div>
            </div>




        </div>
    );
}

