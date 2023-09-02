import './HomeComponent.css';

export default function HomeComponent() {
    return (
        <div className="HomeGeneralComponent">
            <div className="HomeTitleComponent">
                <h1>
                    Découvrez vos langages de l'amour
                </h1>
            </div>

            <div className="HomeImageComponent">
                <img className="HomeImageComponent" src='/src/assets/coupleInLove.png' />
            </div>
        </div>
    );
}

