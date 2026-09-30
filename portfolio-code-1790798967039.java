public class Serveur {
    private String nom;
    private String adresseIp;
    private boolean estActif;

    public Serveur(String nom, String adresseIp) {
        this.nom = nom;
        this.adresseIp = adresseIp;
        this.estActif = true;
    }

    public void redemarrerService() {
        System.out.println("Redémarrage des services sur " + this.nom + " (" + this.adresseIp + ")...");
        this.estActif = true;
        System.out.println("Statut : Serveur opérationnel.");
    }

    public void afficherDetails() {
        String statut = estActif ? "En ligne" : "Hors ligne";
        System.out.println("[" + statut + "] Serveur : " + nom + " | IP : " + adresseIp);
    }

    public static void main(String[] args) {
        Serveur srvWeb = new Serveur("Web-01", "192.168.1.50");
        srvWeb.afficherDetails();
        srvWeb.redemarrerService();
    }
}