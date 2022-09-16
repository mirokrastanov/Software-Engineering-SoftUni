import java.util.Scanner;

public class P05eSuppliesForSchool {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int penPacks = Integer.parseInt(scanner.nextLine());
        int sharpeyPacks = Integer.parseInt(scanner.nextLine());
        int detergentLiters = Integer.parseInt(scanner.nextLine());
        int discountPercent = Integer.parseInt(scanner.nextLine());

        double total = penPacks * 5.80 + sharpeyPacks * 7.20 + detergentLiters * 1.20;
        total = total - total * discountPercent / 100;

        System.out.println(total);
    }
}
