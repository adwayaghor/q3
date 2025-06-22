import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:typed_data';

void main() {
  runApp(const DigitGeneratorApp());
}

class DigitGeneratorApp extends StatelessWidget {
  const DigitGeneratorApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Handwritten Digit Image Generator',
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: const Color(0xFF121212),
        colorScheme: ColorScheme.fromSwatch().copyWith(
          primary: Colors.tealAccent,
          secondary: Colors.tealAccent.shade100,
        ),
      ),
      home: const DigitGeneratorScreen(),
    );
  }
}

class DigitGeneratorScreen extends StatefulWidget {
  const DigitGeneratorScreen({super.key});

  @override
  State<DigitGeneratorScreen> createState() => _DigitGeneratorScreenState();
}

class _DigitGeneratorScreenState extends State<DigitGeneratorScreen> {
  int selectedDigit = 0;
  List<Uint8List> images = [];
  bool loading = false;

  Future<void> generateImages() async {
    setState(() {
      loading = true;
      images = [];
    });

    try {
      final uri = Uri.parse('https://your-render-api-url.com/generate');
      final response = await http.post(
        uri,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'digit': selectedDigit}),
      );

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);
        final List<String> base64Images = List<String>.from(decoded['images']);
        setState(() {
          images = base64Images.map((img) => base64Decode(img)).toList();
        });
      } else {
        throw Exception('Failed to generate images');
      }
    } catch (e) {
      print('Error: $e');
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Failed to connect to server')),
      );
    } finally {
      setState(() {
        loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Handwritten Digit Image Generator'),
        backgroundColor: const Color.fromARGB(255, 255, 255, 255),
        elevation: 2,
      ),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            DropdownButtonFormField<int>(
              decoration: InputDecoration(
                labelText: 'Select a Digit (0-9)',
                labelStyle: const TextStyle(color: Colors.tealAccent),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                filled: true,
                fillColor: Colors.grey.shade900,
              ),
              dropdownColor: Colors.grey.shade900,
              value: selectedDigit,
              items: List.generate(
                10,
                (i) => DropdownMenuItem(
                  value: i,
                  child: Text(
                    i.toString(),
                    style: const TextStyle(fontSize: 18),
                  ),
                ),
              ),
              onChanged: (val) {
                if (val != null) {
                  setState(() => selectedDigit = val);
                }
              },
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: generateImages,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.tealAccent,
                foregroundColor: Colors.black,
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              child: const Text(
                'Generate Images',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
              ),
            ),
            const SizedBox(height: 24),
            if (loading)
              const Center(child: CircularProgressIndicator())
            else if (images.isNotEmpty)
              Expanded(
                child: GridView.builder(
                  itemCount: images.length,
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 5,
                    crossAxisSpacing: 12,
                    mainAxisSpacing: 12,
                  ),
                  itemBuilder: (context, index) {
                    return Card(
                      color: Colors.grey.shade800,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                      elevation: 3,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Image.memory(
                          images[index],
                          fit: BoxFit.contain,
                        ),
                      ),
                    );
                  },
                ),
              ),
          ],
        ),
      ),
    );
  }
}
