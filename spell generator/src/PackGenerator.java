import java.io.*;

public class PackGenerator {
    public static void main(String args[]) throws IOException {
        fileGenerator();
    }

    public static void fileGenerator() throws IOException {
        FileReader fr = new FileReader("pack.txt");
        BufferedReader reader = new BufferedReader(fr);

        BufferedWriter writer = new BufferedWriter(new FileWriter("packDetails.txt"));
        String line;
        String details = "";
        while ((line = reader.readLine()) != null){
            details += line;
        }
        String[] items = details.split(",");
        for (String x: items) {
            x = x.replaceAll(" a ", "");
            x = x.replaceAll(" ", "");
            writer.write("'"+x+"'" + " : {'name' : '" + x + "', 'quantity' : 1},");
            writer.newLine();
        }
        writer.close();
        reader.close();
    }
}
