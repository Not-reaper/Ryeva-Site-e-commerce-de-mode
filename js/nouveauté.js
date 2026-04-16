document.addEventListener('DOMContentLoaded', function() {
    const boutonNouveautes = document.getElementById('btn-nouveautes');
    const sectionNouveautes = document.getElementById('section-nouveautes');

    if (boutonNouveautes && sectionNouveautes) {
        boutonNouveautes.addEventListener('click', function() {
            if (sectionNouveautes.style.display === 'block') {
                sectionNouveautes.style.display = 'none';
            } else {
                sectionNouveautes.style.display = 'block';
            }
        });
    }

    const boutonTendances = document.getElementById('btn-tendances');
    const sectionTendances = document.getElementById('section-tendances');

    if (boutonTendances && sectionTendances) {
        boutonTendances.addEventListener('click', function() {
            if (sectionTendances.style.display === 'block') {
                sectionTendances.style.display = 'none';
            } else {
                sectionTendances.style.display = 'block';
            }
        });
    }

    const boutonPlusPortes = document.getElementById('btn-plus-portes');
    const sectionPlusPortes = document.getElementById('section-plus-portes');

    if (boutonPlusPortes && sectionPlusPortes) {
        boutonPlusPortes.addEventListener('click', function() {
            if (sectionPlusPortes.style.display === 'block') {
                sectionPlusPortes.style.display = 'none';
            } else {
                sectionPlusPortes.style.display = 'block';
            }
        });
    }

    const boutonNouvelleSaison = document.getElementById('btn-nouvelle-saison');
    const sectionNouvelleSaison = document.getElementById('section-nouvelle-saison');

    if (boutonNouvelleSaison && sectionNouvelleSaison) {
        boutonNouvelleSaison.addEventListener('click', function() {
            if (sectionNouvelleSaison.style.display === 'block') {
                sectionNouvelleSaison.style.display = 'none';
            } else {
                sectionNouvelleSaison.style.display = 'block';
            }
        });
    }
});
