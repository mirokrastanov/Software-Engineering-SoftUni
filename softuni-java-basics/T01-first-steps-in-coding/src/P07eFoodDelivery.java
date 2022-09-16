import java.util.Scanner;

public class P07eFoodDelivery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int chickenMeal = Integer.parseInt(scanner.nextLine());
        int fishMeal = Integer.parseInt(scanner.nextLine());
        int veganMeal = Integer.parseInt(scanner.nextLine());
        double total = 1.2 * (chickenMeal * 10.35 + fishMeal * 12.40 + veganMeal * 8.15) + 2.50;

        System.out.println(total);
    }
}
