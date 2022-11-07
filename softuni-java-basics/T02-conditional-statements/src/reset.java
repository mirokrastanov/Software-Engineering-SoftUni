import java.util.Scanner;

public class P06eRepainting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int nylon = Integer.parseInt(scanner.nextLine());
        int paint = Integer.parseInt(scanner.nextLine());
        int diluent = Integer.parseInt(scanner.nextLine());
        int hoursReq = Integer.parseInt(scanner.nextLine());
        double rawCost = (nylon + 2) * 1.50 + paint * 14.50 * 1.1 + diluent * 5.00 + 0.40;
        double workersPay = rawCost * 0.30 * hoursReq;
        double totalCost = rawCost + workersPay;

        System.out.println(totalCost);
    }
}
