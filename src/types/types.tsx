
export interface Fan {
  id: string;
  nom: string;
  initiale: string;
  derniereActivite: string; 
  statut: 'Spender' | 'Timewaster' | 'Good buyer';
  urlAvatar?: string;
}

export interface Contenu {
  id: string;
  titre: 'Gratuit' | 'Acheté' | 'En attente' | 'Refusé' | 'Public';
  prix: number;
  urlImage: string;
}
