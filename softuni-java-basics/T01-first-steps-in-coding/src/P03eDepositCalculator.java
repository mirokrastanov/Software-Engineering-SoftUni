import java.util.Scanner;

public class P03eDepositCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double initialSum = Double.parseDouble(scanner.nextLine());
        int depositDuration = Integer.parseInt(scanner.nextLine());
        double interestRate = Double.parseDouble(scanner.nextLine());

        double interestGained = interestRate * initialSum / 100;
        double interestMonthly = interestGained / 12;

        double finalSum = initialSum + depositDuration * interestMonthly;

        System.out.println(finalSum);
    }
}
