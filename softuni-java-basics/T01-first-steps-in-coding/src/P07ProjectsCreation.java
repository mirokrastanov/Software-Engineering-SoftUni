import java.util.Scanner;

public class P07ProjectsCreation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String architectName = scanner.nextLine();
        int projectsToDo = Integer.parseInt(scanner.nextLine());
        int result = projectsToDo * 3;

        System.out.printf("The architect %s will need %d hours to complete %d project/s.%n", architectName, result, projectsToDo);


    }
}
