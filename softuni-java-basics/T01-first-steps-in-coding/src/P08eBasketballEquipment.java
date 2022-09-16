import java.util.Scanner;

public class P08eBasketballEquipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int annualTax = Integer.parseInt(scanner.nextLine());
        double sneakers = annualTax * 0.60;
        double jersey = sneakers * 0.80;
        double basketball = jersey / 4;
        double miscellaneous = basketball / 5;
        double totalCost = annualTax + sneakers + jersey + basketball + miscellaneous;
        System.out.println(totalCost);
    }
}
