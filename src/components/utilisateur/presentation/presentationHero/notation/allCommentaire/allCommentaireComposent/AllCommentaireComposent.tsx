import styles from "./allCommentaireComposent.module.css";

interface Commentaire {
  comentaire: string;
  note: number;
  nomUtilisateur: string;
  article_id: number;
  utilisateur_id: number;
  commentaire_date: string;
  utilisateur_is_admin: number;
}

interface AllCommentaireComposentProps {
  commentaire: Commentaire;
}

const AllCommentaireComposent = ({
  commentaire,
}: AllCommentaireComposentProps) => {
  //timestamp en de type date
  function depuisQuand(date: string) {
    //date maintenant
    const maintenant = new Date();
    const dateCommentaire = new Date(date);

    const difference = Math.abs(
      maintenant.getTime() - dateCommentaire.getTime(),
    );

    const minutesTotales = Math.floor(difference / 60000);
    const ans = Math.floor(minutesTotales / 525600);
    const mois = Math.floor(minutesTotales / 43800);
    const jours = Math.floor(minutesTotales / 1440);
    const heures = Math.floor(minutesTotales / 60);
    const minutes = minutesTotales % 60;
    if (ans > 0) {
      return `${ans} ans`;
    }
    if (mois > 0) {
      return `${mois} mois`;
    }
    if (jours > 0) {
      return `${jours} jours`;
    }
    if (heures > 0) {
      return `${heures} h`;
    }
    if (minutes > 0) {
      return `${minutes} min`;
    }
    return "maintenant";
  }

  return (
    <div className={styles.contenerCommentaire}>
      {commentaire.note && (
        <p className={styles.pNotes}>⭐ {commentaire.note}</p>
      )}
      <p className={styles.pTexte}>{commentaire.comentaire}</p>
      <p className={styles.pAuteur}>
        <span
          className={
            commentaire.utilisateur_is_admin === 0
              ? `${styles.span}`
              : `${styles.span} ${styles.pAuteurAdmin}`
          }
        >
          @{commentaire.nomUtilisateur}
        </span>
        • {depuisQuand(commentaire.commentaire_date)}
      </p>
    </div>
  );
};

export default AllCommentaireComposent;
